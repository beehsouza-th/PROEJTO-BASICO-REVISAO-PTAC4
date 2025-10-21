import styles from './Home.module.css'

function Home(){
    return(
        <header className={styles.home}>
            <span>Bem Vindos!!</span>
             <h1>Mesas do Restaurante</h1>
  <div class="mesas-container">
    <div class="mesa">
      <div class="numero-mesa">Mesa 1</div>
      <div class="status livre">Livre</div>
    </div>
    <div class="mesa">
      <div class="numero-mesa">Mesa 2</div>
      <div class="status ocupada">Ocupada</div>
    </div>
    <div class="mesa">
      <div class="numero-mesa">Mesa 3</div>
      <div class="status livre">Livre</div>
    </div>
    <div class="mesa">
      <div class="numero-mesa">Mesa 4</div>
      <div class="status ocupada">Ocupada</div>
    </div>
    <div class="mesa">
      <div class="numero-mesa">Mesa 5</div>
      <div class="status livre">Livre</div>
    </div>
  </div>
             </header>
    )
}

export default Home