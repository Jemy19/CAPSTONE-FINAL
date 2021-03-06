export const userColumns = [
  { field: "id", 
  headerName: "ID", 
  width: 90,
},
  {
    field: "name",
    headerName: "Users",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 250,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: true,
  },
  {
    field: "mobilenumber",
    headerName: "Contact Number",
    width: 250,
    editable: true,
  },


  {
    field: "address",
    headerName: "Address",
    width: 280,
    editable: true,
  }
  
];


export const dueColumns = [
  
  {
    field: "name",
    headerName: "Full Name",
    width: 250,

  },
  {
    field: "address",
    headerName: "Address",
    width: 250,
    editable: true,
  },

  {
    field: "amount",
    headerName: "Amount",
    width: 120,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "due",
    headerName: "Type of Payable",
    width: 120,
    editable: true,
  }
  

];

export const MenuItems = [
  {
    title: 'Update Profile',
    path: '/new',
    cName: 'dropdown-link'
  },
  {
    title: 'Logout',
    path: '/login',
    cName: 'dropdown-link'
  },

];

export const peopleColumns = [
  {
    field: "name",
    headerName: "Users",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 270,
    editable: true,
  }
]

export const transactionColumns = [

  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 300,
  },
  {
    field: "date",
    headerName: "Date",
    width: 300,
  },
]

export const transaction = [
  { field: "id", 
  headerName: "Transaction Id", 
  width: 150,
},
  {
    field: "name",
    headerName: "Full Name",
    width: 200,

  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date and Time",
    width: 200,
  },
  {
    field: "entry",
    headerName: "Entry",
    width: 90,
    editable: true,
  },

  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    editable: true,
  },
  

];

export const newsColumns = [

  {
    field: "date",
    width: 100,
  },
  {
    field: "title",
    width: 250,

  },

  {
    field: "body",
    width: 400,
  },
   

];


export const revColumn = [
  {
    field: "name",
    headerName: "Full Name",
    width: 250,

  },
  {
    field: "address",
    headerName: "Address",
    width: 250,

  },

  {
    field: "sdate",
    headerName: "Start Date",
    width: 100,

  },
  {
    field: "edate",
    headerName: "End Date",
    width: 100,
  },
  {
    field: "stime",
    headerName: "Start Time",
    width: 100,
  },
  {
    field: "etime",
    headerName: "End Time",
    width: 100,
  },
  {
    field: 'facilities',
    headerName: 'Facilities',
    width:120,
  },
  {
    headerName: 'Status',
    field: 'status',
    width:120,
    editable:true,
    type: 'singleSelect',
    valueOptions: ["Pending", 'Approved', 'Cancelled']
  }

]

export const userrevColumn = [
  {
    field: "name",
    headerName: "Full Name",
    width: 250,

  },
  {
    field: 'facilities',
    headerName: 'Facilities',
    width:150,
  },
  {
    field: "sdate",
    headerName: "Start Date",
    width: 100,

  },
  {
    field: "edate",
    headerName: "End Date",
    width: 100,
  },
  {
    field: "stime",
    headerName: "Start Time",
    width: 100,
  },
  {
    field: "etime",
    headerName: "End Time",
    width: 100,
  },
  {
    headerName: 'Status',
    field: 'status',
    width:120,
    editable:true,
    type: 'singleSelect',
    valueOptions: ["Pending", 'Approved', 'Cancelled']
  }

];