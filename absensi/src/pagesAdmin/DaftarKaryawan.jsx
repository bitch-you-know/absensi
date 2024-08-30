import { Card, CardBody, CardHeader, Modal, Table } from "react-bootstrap"
import NavbarAdmin from "../components/navbarAdmin"
import { axsiosInstance } from "../lib/axios"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useForm, Controller } from "react-hook-form"

const DaftarKaryawan = () => {
    const token = useSelector((state) => state.auth.token)
    const [karyawans, setKaryawans] = useState([])
    const [editeModal, setEditeModal] = useState(false)
    const [editeDataById, setEditeDataById] = useState(null)


    //FORM UNTUK EDITE DATA KARYAWAN
    const formEdite = useForm({
        defaultValues: {
            email: "",
            password: "",
            divisi: "",
            nama: "",
            alamat: ""

        }
    })


    //GET DATA KARYAWAN
    const getEmploye = async () => {
        try {
            const result = await axsiosInstance.get("users", {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = result.data.users
            setKaryawans(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    //PUT/EDITE DATA KARYAWAN

    const putEmploye = async (data) => {
        const modifiedData = {
            ...data,
            id: editeDataById, // Menggunakan ID yang benar
        };
    
        try {
            await axsiosInstance.put(`users/${editeDataById}`, modifiedData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            getEmploye(); // Update data karyawan setelah perubahan
            handleClose(); // Tutup modal setelah perubahan
        } catch (error) {
            console.log(error);
        }
    }
    
    //OPEN MODAL
    const openModalEdite = (karyawan) => {
        setEditeModal(true);
        setEditeDataById(karyawan.id); // INI ID NYA 
        formEdite.reset({
            email: karyawan.email,
            password: karyawan.password,
            divisi: karyawan.divisi,
            nama: karyawan.nama,
            alamat: karyawan.alamat
        });
    }
    //CLOSE MODAL EDITE
    const handleClose = () => {
        setEditeModal(false)
    }
    useEffect(() => {
        getEmploye()
    }, [])

    return (
        <div className='d-flex bg-secondary' style={{ height: "100vh", width: "100%" }}>
            <NavbarAdmin />
            <div className="daftarKaryawan" id="daftarKaryawan" style={{ width: "100%", height: '100vh' }}>

                <div className="container d-flex flex-column justify-content-start align-items-center " style={{ height: '100vh' }}>

                    <Card className="w-100 p-5 m-5 ">
                        <CardHeader><h2 className="fs-57">Daftar Karyawan PT ABI</h2></CardHeader>
                        <CardBody>
                            <Table striped bordered hover size="sm">
                                <thead className="table table-dark ">
                                    <tr>
                                        <th>#</th>
                                        <th>Divisi</th>
                                        <th>Nama</th>
                                        <th>Alamat</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {karyawans.map((karyawan) => (
                                        <tr key={karyawan.id} >
                                            <td>{karyawan.id}</td>
                                            <td>{karyawan.divisi}</td>
                                            <td>{karyawan.nama}</td>
                                            <td>{karyawan.alamat}</td>
                                            <td>{karyawan.email}</td>
                                            <td>{karyawan.password}</td>
                                            <td>
                                                <Button className="me-2" size="sm">Detail</Button>
                                                <Button onClick={() => openModalEdite(karyawan)} className="me-2" variant="secondary" size="sm">Edite</Button>
                                                <Button className="me-2" variant="danger" size="sm">Delete</Button>

                                            </td>

                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                    <Modal show={editeModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Data Karyawan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={formEdite.handleSubmit(putEmploye)} className="d-flex flex-column justify-content-center align-items-center">

                                <Controller
                                    name='email'
                                    control={formEdite.control}
                                    render={({ field }) => (

                                        <input {...field} className="form-control mb-2" placeholder="Email" />
                                    )}
                                />
                                <Controller
                                    name='password'
                                    control={formEdite.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Password" type="string" />
                                    )}
                                />
                                <Controller
                                    name='divisi'
                                    control={formEdite.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Divisi" />
                                    )}
                                />
                                <Controller
                                    name='nama'
                                    control={formEdite.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Nama" />
                                    )}
                                />
                                <Controller
                                    name='alamat'
                                    control={formEdite.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Alamat" />
                                    )}
                                />
                                <div className="d-flex justify-content-between " style={{ width: "100%", padding: '10px' }}>
                                    <Button variant="secondary" onClick={handleClose} className="me-2">Cancel</Button>
                                    <Button type='submit' variant="primary">Simpan Perubahan</Button>
                                </div>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>


                </div>
            </div>
        </div>

    )
}

export default DaftarKaryawan 