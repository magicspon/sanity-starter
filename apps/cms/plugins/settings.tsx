import { definePlugin } from 'sanity'
import * as React from 'react'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

/**
 * This plugin contains all the logic for setting up the singletons
 */

import { apiVersion, previewSecretId } from '../lib/env'
import { type DocumentDefinition } from 'sanity'
import { ListItem, ListItemBuilder, type StructureResolver } from 'sanity/desk'

import { PREVIEWABLE_DOCUMENT_TYPES } from '../sanity.config'
import { PreviewPane } from './previewPane/PreviewPane'

export const singletonPlugin = (types: string[]) => {
  return definePlugin({
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId),
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev, { schemaType }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  })
}

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
      console.log({ typeDef })

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

    // const channels: (ListItemBuilder | ListItem)[] = []
    // const structures: (ListItemBuilder | ListItem)[] = []

    // // The default root list items (except custom ones)
    // S.documentTypeListItems()
    //   .filter(
    //     (listItem) =>
    //       !typeDefArray.find(
    //         (singleton) => singleton.name === listItem.getId(),
    //       ),
    //   )
    //   .forEach((node) => {
    //     const schema = node.serialize().schemaType

    //     if (orderable.includes(schema!.name)) {
    //       structures.push(
    //         orderableDocumentListDeskItem({
    //           type: node.getId()!,
    //           title: node.getTitle(),
    //           S,
    //           context,
    //         }),
    //       )

    //       return
    //     }

    //     return channels.push(node)
    //   })

    return S.list()
      .title('Content')
      .items([
        ...singletonItems,
        S.divider(),
        // ...channels,
        // S.divider(),
        // ...structures,
      ])
  }
}
