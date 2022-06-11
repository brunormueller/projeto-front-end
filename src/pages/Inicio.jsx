import React from 'react';

import MyDataGrid from '../components/MyDataGrid';

function Documentos(props) {
    const {
        onNewButtonClick,
        onUpdateButtonClick,
    } = props;

    const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
        onUpdateButtonClick({
            id: rowId,
            title: rowData.titulo,
            descricao: rowData.descricao,
        });
    };

    return (
        <MyDataGrid
            title='Documentos'
            baseURL='api/Documento'
            idColumnName='id'
            onNewButtonClick={onNewButtonClick}
            updateRow={handleOnMyDataGridUpdateRow}
            columns={[
                {
                    field: 'id',
                    headerName: 'ID',
                    width: 90,
                },
                {
                    field: 'titulo',
                    headerName: 'Titulo',

                },
                {
                    field: 'descricao',
                    headerName: 'Descrição',
                    flex: 1,
                },
            ]}
        />
    );
}

export default Documentos;
