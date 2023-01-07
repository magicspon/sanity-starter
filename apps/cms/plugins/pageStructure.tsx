import * as React from 'react'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { apiVersion, previewSecretId } from '../lib/env'
import { type DocumentDefinition } from 'sanity'
import { ListItem, ListItemBuilder, type StructureResolver } from 'sanity/desk'
import { PREVIEWABLE_DOCUMENT_TYPES } from '../sanity.config'
import { PreviewPane } from './previewPane/PreviewPane'

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
  orderable: string[],
): StructureResolver => {
  return (S, context) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .id(typeDef.name)
        .schemaType(typeDef.type)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([
              // @todo: consider DRYing with `plugins/previewPane/index.tsx`
              // Default form view
              S.view.form(),
              // Preview
              ...(PREVIEWABLE_DOCUMENT_TYPES.includes(typeDef.name)
                ? [
                    S.view
                      .component((props) => (
                        <PreviewPane
                          previewSecretId={previewSecretId}
                          apiVersion={apiVersion}
                          {...props}
                        />
                      ))
                      .title('Preview'),
                  ]
                : []),
            ]),
        )
    })

    const channels: (ListItemBuilder | ListItem)[] = []
    const structures: (ListItemBuilder | ListItem)[] = []

    // The default root list items (except custom ones)
    S.documentTypeListItems()
      .filter(
        (listItem) =>
          !typeDefArray.find(
            (singleton) => singleton.name === listItem.getId(),
          ),
      )
      .forEach((node) => {
        const schema = node.serialize().schemaType
        if (orderable.includes(schema!.name)) {
          structures.push(
            orderableDocumentListDeskItem({
              type: node.getId()!,
              title: node.getTitle(),
              S,
              context,
            }),
          )
          return
        }

        return channels.push(node)
      })

    return S.list()
      .title('Content')
      .items([
        ...singletonItems,
        S.divider(),
        ...channels,
        S.divider(),
        ...structures,
      ])
  }
}
