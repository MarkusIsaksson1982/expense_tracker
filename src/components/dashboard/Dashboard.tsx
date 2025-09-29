import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .order('date', { ascending: false });

    if (error) console.error(error);
    else {
      setExpenses(data);
      setTotal(data.reduce((sum, exp) => sum + parseFloat(exp.amount), 0));
    }
  };

  const exportToCSV = () => {
    const csv = 'Date,Description,Category,Amount\n' +
      expenses.map(exp => `${exp.date},${exp.description},${exp.category},${exp.amount}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expenses.csv';
    a.click();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Total Expenses: ${total.toFixed(2)}</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={exportToCSV}>Export to CSV</Button>
          <ul className="mt-4">
            {expenses.map(exp => (
              <li key={exp.id}>{exp.date} - {exp.description} - ${exp.amount}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;