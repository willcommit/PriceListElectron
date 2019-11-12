var $ = window.jQuery = require('jquery')
require ('jszip');
require ('pdfmake');
require( 'datatables.net' )(window, $ );
require( 'datatables.net-buttons-dt' )(window, $ );
require( 'datatables.net-buttons/js/buttons.colVis.js' )(window, $ );
require( 'datatables.net-buttons/js/buttons.html5.js' )(window, $ );
require( 'datatables.net-buttons/js/buttons.print.js' )(window, $ );
require( 'datatables.net-colreorder-dt' )(window, $ );
require( 'datatables.net-fixedcolumns-dt' )(window, $ );
require( 'datatables.net-fixedheader-dt' )(window, $ );
require( 'datatables.net-keytable-dt' )(window, $ );
require( 'datatables.net-responsive-dt' )(window, $ );
require( 'datatables.net-rowgroup-dt' )(window, $ );
require( 'datatables.net-rowreorder-dt' )(window, $ );
require( 'datatables.net-scroller-dt' )(window, $ );
require( 'datatables.net-select-dt' )(window, $ );


const populateTable = (data) => {

    // $(document).ready(function() {

        $('#table_id').DataTable( {
            data:data,
            paging: true,
            columns: [
                { data: 'ItemCode' },
                { data: 'Description' },
                { data: 'Type' },
                { data: 'FCAPrice' }
            ],

            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'copyHtml5',
                    text: 'Copy current page',
                    exportOptions: {
                        modifier: {
                            columns: ':visible',
                            page: 'current'
                        }
                    }
                },
                {
                    text: 'Exportera till Excel',
                    action: function () {
                        alert( this.rows('.selected').data().length +' row(s) selected' );
                    }
                },
                'colvis'
            ],
            colReorder: true,
            select: true,
            "lengthMenu": [[20, 25, 50, -1], [20, 25, 50, "All"]]
        } );

        // $('#table_id tbody').on( 'click', 'tr', function () {
        //     $(this).toggleClass('selected');
        // } );
    //} );
}




module.exports = {
    populateTable: populateTable
}