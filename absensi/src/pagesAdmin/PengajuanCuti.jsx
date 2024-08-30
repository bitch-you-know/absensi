import { Card, CardBody, CardHeader, Table } from "react-bootstrap"
import NavbarAdmin from "../components/navbarAdmin"

const PengajuanCuti = () => {
    return (
        <div className='d-flex bg-secondary' style={{ height: "100vh", width: "100%" }}>
            <NavbarAdmin/>
            <div className="daftarKaryawan" id="daftarKaryawan" style={{ width: "100%", height: '100vh' }}>
         
         <div className="container  d-flex flex-column justify-content-start align-items-center " style={{ height: '100vh' }}>

             <Card className="w-100 p-5 m-5">
                 <CardHeader><h2 className="fs-57">Pengajuan Cuti PT ABI</h2></CardHeader>
                 <CardBody>
                     <Table striped bordered hover size="sm">
                         <thead className="table table-dark ">
                             <tr>
                                 <th>#</th>
                                 <th>First Name</th>
                                 <th>Last Name</th>
                                 <th>Username</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>1</td>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                             </tr>
                             <tr>
                                 <td>2</td>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                             </tr>
                             <tr>
                                 <td>3</td>
                                 <td colSpan={2}>Larry the Bird</td>
                                 <td>@twitter</td>
                             </tr>
                         </tbody>
                     </Table>
                 </CardBody>
             </Card>

         </div>
     </div>
        </div>
        
    )
}

export default PengajuanCuti 