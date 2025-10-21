import styles from './Reservas.module.css'

function Reservas(){
    return(
        <div className={styles.reservas}>
            <span>Reservas de mesa</span>
            <nav>
                <p>data de Reserva</p>
                 <p>Horário</p>
                  <p>nome do cliente</p>
                  <p>Contato</p>
                  <p>Seleção da mesa</p>
                  <button>Botão confirmar reserva</button>
                  

            </nav>
             </div>
    )
}

export default Reservas


