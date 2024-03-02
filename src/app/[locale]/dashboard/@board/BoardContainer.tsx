'use client';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import NorthEast from '@mui/icons-material/NorthEast';
import Grid from './Grid';
import React, { useState } from 'react';
import Toolbar from './Toolbar';
import { moveOrderItem } from './Grid/gridManipulation';
import { BoardRecord } from './types';
import { useTranslations } from 'next-intl';
import { DEFAULT_COLUMNS_NUMBER, DEFAULT_ROWS_NUMBER } from './constants';
import Tile from '@/components/Tile';
import SelectTileMask from '@/components/SelectTileMask';
import { useBoardStore } from '@/providers/BoardStoreProvider';

const BoardSection = () => {
  const message = useTranslations('Board.BoardContainer');
  const { board, setBoard } = useBoardStore((state) => state);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
    setSelectedTiles([]);
  };

  const handleTileClick = (id: string) => {
    if (!isEditing) return;

    setSelectedTiles((selectedTiles) =>
      selectedTiles.includes(id)
        ? selectedTiles.filter((tileId) => tileId !== id)
        : [...selectedTiles, id],
    );
  };

  const onTileDrop = (
    item: { id: string },
    position: { row: number; column: number },
  ) => {
    if (!board) return;
    const newOrder = moveOrderItem(item.id, position, board.grid.order);
    const newBoard: BoardRecord = {
      ...board,
      grid: {
        ...board.grid,
        order: newOrder,
      },
    };
    setBoard(newBoard);
  };
  if (!board) return null;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: '.5rem',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            height: '12%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Box>Image</Box>
            <Box>| Board title</Box>
          </Box>
          <Toolbar onEditClick={handleEditClick} />
        </Box>
        <Divider flexItem sx={{ my: '0.5rem' }} />
        <Grid
          order={board.grid ? board.grid.order : []}
          items={board.tiles}
          columns={board.grid ? board.grid.columns : DEFAULT_COLUMNS_NUMBER}
          rows={board.grid ? board.grid.rows : DEFAULT_ROWS_NUMBER}
          dragAndDropEnabled={true} //{isSelecting}
          renderItem={(item) => (
            <Tile tile={item} handleTileClick={handleTileClick}>
              {isEditing && (
                <SelectTileMask isSelected={selectedTiles.includes(item.id)} />
              )}
            </Tile>
          )}
          onItemDrop={onTileDrop}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          pt: { xs: '0.5rem', sm: 0 },
          pr: { xs: 1, sm: 1 },
          pb: { xs: 1, sm: 1 },
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<NorthEast />}
          sx={{ fontSize: '0.7rem' }}
        >
          {message('exportToCboard')}
        </Button>
      </Box>
    </>
  );
};

export default function BoardContainer() {
  // should use board from store as truth
  const { board: boardFromStore } = useBoardStore((state) => state);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f8f8f8',
        borderRadius: 1,
      }}
    >
      {boardFromStore && <BoardSection />}
      {!boardFromStore && <p>LOADING</p>}
    </Box>
  );
}
