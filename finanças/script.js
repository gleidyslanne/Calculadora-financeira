function calculateWeeklyExpenses() {
    const startingAmount = parseFloat(document.getElementById('startingAmount').value);
    const dailyExpense = parseFloat(document.getElementById('dailyExpense').value);
    const startDate = new Date(document.getElementById('startDate').value);
    
    // Convertendo a data de string para milissegundos
    const startTimestamp = startDate.getTime();

    // Calculando o total de despesas diárias em uma semana
    const totalDailyExpenses = dailyExpense * 7;

    // Calculando o valor final após uma semana
    const endTimestamp = startTimestamp + (7 * 24 * 60 * 60 * 1000);
    const endDate = new Date(endTimestamp);
    const finalAmount = startingAmount - totalDailyExpenses;

    // Formatação da data para exibição
    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();

    // Exibindo o resultado
    document.getElementById('result').innerHTML = `
        Despesas semanais de ${formattedStartDate} a ${formattedEndDate}: R$ ${finalAmount.toFixed(2)}
    `;
}
