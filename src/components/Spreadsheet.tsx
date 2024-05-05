import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Asteroid } from '../models/Asteroid';

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 160, },
    { field: 'time', headerName: 'Time of close approach', headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 240 },
    { field: 'potentialHazard', headerName: 'Potential Hazard', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 160 },
    { field: 'estimatedDiameter', headerName: 'Estimated Diameter', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 160 },
    { field: 'missDistance', headerName: 'Miss Distance', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 160 },
    { field: 'velocity', headerName: 'Velocity', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 160 },
    { field: 'note', headerName: 'Note', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'super-app-theme--header', minWidth: 160, editable: true, type: 'string' },
];

interface Props {
    data: Asteroid[]
}
export default function SpreadSheet({ data }: Props) {

    return (
        <Box
            sx={{
                height: 480,
                width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    fontSize: '16px',

                },
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                    sorting: {
                        sortModel: [{ field: 'time', sort: 'desc' }]
                    }
                }}
                pageSizeOptions={[5, 10, 25]}
                disableRowSelectionOnClick
                processRowUpdate={(updatedRow) => {
                     localStorage.setItem(updatedRow.id,updatedRow.note)
                     return updatedRow
                }}
            />
        </Box>
    );
}
