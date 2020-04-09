export interface obraSocialI{
    id:number;
    title:string;
}

export class obraSocial implements obraSocialI{

    id: number;
    razonSocial: string;
    fechaInicioActividad:any;
    listadoEmail: any;
    title: string;

    public constructor(form:any) {
        // to-do ver si se puede hacer de una forma mas automatica (no tener que asignar campo por campo)
        this.id = null;
        this.razonSocial = form['razonSocial'];
        this.fechaInicioActividad = form['fechaInicioActividad'];
        this.listadoEmail = form['listadoEmail'];
    }

    public toStringCreada():string {
        return `Fue creada la obra social denominada: ${this.razonSocial} `;
    }

    public getId():number { return this.id; }
    public getRazonSocial():string { return this.razonSocial;}
}