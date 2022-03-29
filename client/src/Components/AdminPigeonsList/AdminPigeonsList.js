import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const initialRows = [
  {
    id: 1,
    ring: '2020AB1',
    name: 'Laker',
    pedigree: 'Pedigree',
    birth: 2020,
    father_ring: '2019II4',
    mother_ring: '2019LL8',
    gender: 'Female',
    color: 'Black',
    race: 'Mensajera',
    condition: 'Competing'
  },
  {
    id: 2,
    ring: '2020CD4',
    name: 'Gauge',
    pedigree: 'Pedigree',
    birth: 2020,
    father_ring: '2019AB2',
    mother_ring: '2019KO6',
    gender: 'Female',
    color: 'Brown',
    race: 'Mensajera',
    condition: 'Breeding'
  },
  {
    id: 3,
    ring: '2020OP9',
    name: 'Wolfgang',
    pedigree: 'Pedigree',
    birth: 2020,
    father_ring: '2018IW5',
    mother_ring: '2019PU2',
    gender: 'Male',
    color: 'White',
    race: 'Mensajera',
    condition: 'Competing'
  },
  {
    id: 4,
    ring: '2019UW9',
    name: 'Marie',
    pedigree: 'Pedigree',
    birth: 2019,
    father_ring: '2018PW5',
    mother_ring: '2018PU2',
    gender: 'Female',
    color: 'Grezzle',
    race: 'Mensajera',
    condition: 'Competing'
  }
];

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState(initialRows);

  const deletePigeon = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const columns = React.useMemo(
    () => [
      { field: 'ring', type: 'string' },
      { field: 'name', type: 'string' },
      { field: 'pedigree', type: 'string' },
      { field: 'birth', type: 'date' },
      { field: 'father_ring', type: 'string' },
      { field: 'mother_ring', type: 'string' },
      { field: 'gender', type: 'string' },
      { field: 'color', type: 'string' },
      { field: 'race', type: 'string' },
      { field: 'condition', type: 'string' },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deletePigeon(params.id)}
          />
        ],
      },
    ],
    [deletePigeon],
  );

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <Typography variant="h1">Pigeons</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="contained">Add New Pigeon</Button>
          </Box>
        </Box>
        <Paper sx={{ p: 2}}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1, margin: '0 auto' }}>
              <DataGrid autoHeight {...initialRows} sx={{ backgroundColor: '#FFF' }} columns={columns} rows={rows} />
            </div>  
          </div>
        </Paper>
      </Box>
      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained">Add New Pigeon</Button>
      </Box>
    </>
  );
}
