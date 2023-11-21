# CAROUSEL CON ARRAY E OGGETTI

Per lo svolgimetno di questo esercizio ho preso il codice vecchio e l'ho risistemato, stravolgendolo, per farlo funzionare ocn gli oggetti, rispetto a quello vecchio ho cambiato anche la logica dell'autoplay che dava problemi quando veniva stoppato, adesso e'basata su un bottone solo che si attiva o si disattiva.

## Inizializzazione dei dati:

La variabile pics contiene informazioni su diverse immagini di giochi, ciascuna con un'immagine, un titolo e una descrizione.

## Creazione degli elementi della galleria:

Utilizzando i dati in pics, il codice crea gli elementi HTML per la galleria principale e le miniature corrispondenti.

## Gestione dell'interfaccia utente:

Viene impostata la logica per navigare avanti e indietro nella galleria principale sia cliccando sui pulsanti "prev" e "next" che cliccando sulle miniature delle immagini.

## Autoplay:

È possibile attivare e disattivare l'autoplay delle immagini con un intervallo di 3 secondi. Il pulsante per l'autoplay può essere attivato o disattivato, avviando o arrestando l'autoplay rispettivamente.

## Funzioni di cambio immagine:

La funzione changePic(target) gestisce il cambio delle immagini in base all'input ricevuto ("next", "prev" o un indice specifico).

## Inizializzazione e attivazione:

La prima immagine è impostata come attiva all'avvio della galleria.
