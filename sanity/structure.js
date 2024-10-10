// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Gestionale')
    .items([
      S.documentTypeListItem('listings').title('Immobili'),
      S.documentTypeListItem('locations').title('Quartieri'),
      S.documentTypeListItem('zones').title('Zone'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['listings', 'locations', 'zones'].includes(item.getId()),
      ),
    ])
