import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore( {

    reducer: {},

} )

// Это создает хранилище Redux, а также автоматически настраивает 
// расширение Redux DevTools, чтобы вы могли проверять хранилище 
// во время разработки.

//   https://redux-toolkit.js.org/tutorials/quick-start