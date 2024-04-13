import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
const List = () => {

    const [mostrarSidebar, setMostrarSidebar] = useState(false);
    const [mostrarSidebarAdd, setMostrarSidebarAdd] = useState(false);
    const [mostrarDialog, setMostrarDialog] = useState(false);
    const [teams, setTeams] = useState([]);

    function confirmacao(){
        confirmDialog({
            header: "Aviso",
            message: "Deseja realmente apagar este item?",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            accept: () => {
                alert("confirmou")
            },
            reject: () => {
                alert("cancelou")
            }
        })
    }

    async function buscarTeams(){
        const request = await fetch("http://localhost:3000/teams")
        const response = await request.json();
        setTeams(response);
    }

    useEffect(() => {
        buscarTeams();
    }, []);


    const titulo = (
        <div className="flex justify-content-between align-items-center text-lg">
            Titulo do card
            <i className="pi pi-eye cursor-pointer" onClick={() => setMostrarDialog(true)}></i>
        </div>
    );
    const footer = (
        <div className="flex gap-3">
            <Button 
            label="Adicionar" 
            className="flex-1 px-0" 
            onClick={() => setMostrarSidebarAdd(true)}/>
            <Button icon="pi pi-trash" onClick={confirmacao} />
        </div>
    );
    return (
        <section className="flex flex-wrap gap-3 px-8">
            <h2 className="w-full flex align-items-center justify-content-between">
                Teams
                <Button 
                    label="novo team"
                    icon="pi pi-plus"
                    onClick={() => setMostrarSidebar(true)}
                />
            </h2>
            <Card style={{width: `calc(20% - 13px)`}} title={titulo} footer={footer}>
                <h1 className="mx-auto flex flex-column text-center">0<span className="text-sm">/ 0</span></h1>
            </Card>
            <Card style={{width: `calc(20% - 13px)`}} title={titulo} footer={footer}>
                <h1 className="mx-auto flex flex-column text-center">0<span className="text-sm">/ 0</span></h1>
            </Card>
            <Card style={{width: `calc(20% - 13px)`}} title={titulo} footer={footer}>
                <h1 className="mx-auto flex flex-column text-center">0<span className="text-sm">/ 0</span></h1>
            </Card>
            <Card style={{width: `calc(20% - 13px)`}} title={titulo} footer={footer}>
                <h1 className="mx-auto flex flex-column text-center">0<span className="text-sm">/ 0</span></h1>
            </Card>
            <Card style={{width: `calc(20% - 13px)`}} title={titulo} footer={footer}>
                <h1 className="mx-auto flex flex-column text-center">0<span className="text-sm">/ 0</span></h1>
            </Card>
            <Card style={{width: `calc(20% - 13px)`}} title={titulo} footer={footer}>
                <h1 className="mx-auto flex flex-column text-center">0<span className="text-sm">/ 0</span></h1>
            </Card>

            <Sidebar 
                visible={mostrarSidebar}
                onHide={() => setMostrarSidebar(false)}
                position="right"
            >
                Teste
            </Sidebar>
            <Sidebar 
                visible={mostrarSidebarAdd}
                onHide={() => setMostrarSidebarAdd(false)}
                position="left"
            >
                Adicionar Cobaia
            </Sidebar>
            <Dialog 
                visible={mostrarDialog}
                onHide={() => setMostrarDialog(false)}
                position="top"
            >
                Lista de nomes do time
            </Dialog>
            <ConfirmDialog />
        </section>
    );
}
 
export default List;