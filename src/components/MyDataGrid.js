import axios from 'axios';
import {
    forwardRef,
    Fragment,
    useCallback,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';
import {
    Button,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core';
import {
    Delete as DeleteIcon,
    Edit as EditIcon
} from '@material-ui/icons';
import {
    DataGrid,
} from '@material-ui/data-grid';

const MyDataGrid = forwardRef((props, ref) => {
    const {
        title,
        baseURL,
        columns,
        idColumnName,
        onNewButtonClick,
        updateRow,
    } = props;

    const [state, setState] = useState({
        loadData: true,
        rows: [],
    });

    const handleOnUpdate = (rowId, rowData) => {
        updateRow(rowId, rowData);
    };

    const getData = useCallback(async () => {
        const { data } = await axios.get(baseURL);

        setState({
            loadData: false,
            rows: data,
        });
    }, [baseURL]);

    const deleteRow = async rowId => {
        await axios.delete(`${baseURL}/${rowId}`);

        getData();
    };

    useEffect(() => {
        setTimeout(() => {
            if (state.loadData) {
                getData();
            }
        }, 0);
    }, [state.loadData, getData]);

    useImperativeHandle(ref, () => ({
        getData,
    }));

    const {
        rows,
    } = state;

    return (
        <Fragment>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '2%',
                    alignItems: 'center',
                }}
            >
                <Typography
                    gutterBottom
                    variant='h6'
                    style={{
                        margin: 20,
                    }}
                >
                    {title}
                </Typography>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={onNewButtonClick}
                >
                    Novo
                </Button>
            </div>
            <div
                style={{
                    height: 'calc(100vh - 200px)',
                    width: '100%'
                }}
            >
                <DataGrid
                    disableSelectionOnClick
                    rows={rows}
                    columns={[
                        ...columns,
                        {
                            field: 'Ações',
                            width: 200,
                            renderCell: ({ row }) => {
                                return (
                                    <div>
                                        <Tooltip
                                            arrow
                                            title='Alterar'
                                        >
                                            <IconButton
                                                color='primary'
                                                onClick={() => {
                                                    handleOnUpdate(row[idColumnName], row);
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            arrow
                                            title='Excluir'
                                        >
                                            <IconButton
                                                color='primary'
                                                onClick={() => {
                                                    deleteRow(row[idColumnName]);
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                );
                            }
                        },
                    ]}
                />
            </div>
        </Fragment>
    );
});

export default MyDataGrid;