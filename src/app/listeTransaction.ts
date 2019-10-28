export class ListeTransation {
    constructor(
      public id: number,
      public Type: string,
      public Montant: number,
      public NumeroExpediteur: number,
      public NumeroDestinataire: number,
      public CNIdestinataire: number,
      public NomCompletExpediteur: Text,
      public NomCompletDestinataire: Text,
      public CodeTransaction: string,
      public Compte:any,
      public Frais: number,
      public CommissionEtat: number,
      public CommissionSystem: number,
      public CommissionPartenaire: number,
      public user:any
    ) {}
  }