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
} from '@material-ui/core';
import {
    DataGrid,
} from "@material-ui/data-grid";

const MyDataGrid = forwardRef((props, ref) => {
    const {
        baseURL,
        columns,
        idColumnName,
        updateRow,
    } = props;

    const [state, setState] = useState({
        loadData: true,
        rows: [],
    });

    const handleOnUpdate = (rowId, rowData) => {
        console.log(rowId);
        console.log(rowData);
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
        if (state.loadData) {
            getData();
        }
    }, [state.loadData, getData]);

    useImperativeHandle(ref, () => ({
        getData,
    }));

    const {
        rows,
    } = state;

    return (
        <Fragment>
            <div style={{ height: 300, width: "100%" }}>
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
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            onClick={() => {
                                                handleOnUpdate(row[idColumnName], row);
                                            }}
                                        >
                                            Alterar
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            onClick={() => {
                                                deleteRow(row[idColumnName]);
                                            }}
                                        >
                                            Excluir
                                        </Button>
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