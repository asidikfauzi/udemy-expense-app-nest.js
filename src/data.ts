export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 75000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
        id: 'uuid2',
        source: 'YouTube',
        amount: 25000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
      {
        id: 'uuid3',
        source: 'Food',
        amount: 15000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE,
      },
      // {
      //   id: 'uuid4',
      //   source: 'Udemy',
      //   amount: 5000,
      //   created_at: new Date(),
      //   updated_at: new Date(),
      //   type: ReportType.INCOME,
      // },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: 'income' | 'expense';
  }[];
}
