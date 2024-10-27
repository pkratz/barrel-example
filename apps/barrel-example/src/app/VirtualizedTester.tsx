import { AutoSizer, List } from 'react-virtualized';

export const VirtualizedTester = () => {
  const listData = Array.from(
    { length: 1000 },
    (_, index) => `Item ${index + 1}`
  );

  const rowRenderer = (row: any) => (
    <div key={row.key} style={row.style}>
      {listData[row.index]}
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          rowCount={listData.length}
          rowHeight={30}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  );
};
