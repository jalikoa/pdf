function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const logoUrl = './logo.png';
            const imgWidth = 40;
            const imgHeight = 30;
            doc.addImage(logoUrl, 'PNG', 10, 10, imgWidth, imgHeight);
doc.setFontSize(22);
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("EYN LCC NO.2 GASHALA", 48, 22);
  doc.setFontSize(18);
  doc.setFont("Arial", "light");
  doc.setTextColor(0, 0, 0);
  doc.text("SCHOOL FEES REPORT FOR :", 48, 28);
  const table = document.getElementById("reportTable");
  const tableRows = [];
  const headers = [];
  const tableHeaderCells = table.querySelectorAll("thead tr th");
  tableHeaderCells.forEach(headerCell => {
    headers.push(headerCell.textContent);
  });
  const tableDataRows = table.querySelectorAll("tbody tr");
  tableDataRows.forEach(row => {
    const rowData = [];
    const cells = row.querySelectorAll("td");
    cells.forEach(cell => {
      rowData.push(cell.textContent);
    });
    tableRows.push(rowData);
  });
  doc.autoTable({
    head: [headers],
    body: tableRows,
    startY: 42,
  });
  const pdfName = prompt('Name your report ?');
  doc.save(pdfName + '.pdf');
}