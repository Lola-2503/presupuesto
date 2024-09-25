function agregarProducto() {
            const tbody = document.getElementById('productos');
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td><input type="number" class="cantidad" min="1" value="1"></td>
                <td>
                    <select class="producto">
                        <option value="0">Seleccionar Producto</option>
                        <option value="1000">Producto 1</option>
                        <option value="2000">Producto 2</option>
                        <option value="3000">Producto 3</option>
                        <option value="4000">Producto 4</option>
                        <option value="5000">Producto 5</option>
                    </select>
                </td>
                <td><input type="number" class="precioUnitario" min="0" step="0.01"></td>
                <td><span class="precioTotal">0.00</span></td>
            `;
            tbody.appendChild(nuevaFila);


        }

        function calcularTotal() {
            let subtotal = 0;

            const filas = document.querySelectorAll("tbody tr");
            filas.forEach(fila => {
                const cantidad = parseFloat(fila.querySelector(".cantidad").value) || 0;
                const precioUnitario = parseFloat(fila.querySelector(".precioUnitario").value) || 0;
                const precioTotal = cantidad * precioUnitario;

                fila.querySelector(".precioTotal").textContent = precioTotal.toFixed(2);
                subtotal += precioTotal;
            });

            const iva = subtotal * 0.21;
            const total = subtotal + iva;

            const ahora12 = total / 12;
            const ahora18 = (total * 1.75) / 18;

            document.getElementById("subtotal").textContent = subtotal.toFixed(2);
            document.getElementById("iva").textContent = iva.toFixed(2);
            document.getElementById("total").textContent = total.toFixed(2);
            document.getElementById("ahora12").textContent = ahora12.toFixed(2);
            document.getElementById("ahora18").textContent = ahora18.toFixed(2);
        }

        function imprimirPresupuesto() {
            window.print();
        }

        function exportarPDF() {
            alert("Exportar a PDF aún no implementado");
        }