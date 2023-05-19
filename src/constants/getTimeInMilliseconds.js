export const getTimeInMilliseconds = (time) => {
    switch (time) {
      case "15m":
        return 900000; // 15 minutos
      case "30m":
        return 1800000; // 30 minutos
      case "1H":
        return 3600000; // 1 hora
      case "6H":
        return 3600000*6; // 6 horas
      case "12H":
        return 3600000*12; // 12 horas
      case "1D":
        return 3600000*24; // 1 Dia
      case "7D":
        return 3600000*24*7; // 7 Dias
      case "15D":
        return 3600000*24*15; // 15 Dias
      case "1M":
        return 3600000*24*30; // 1 Mes
      case "3M":
        return 3600000*24*30*3; // 3 Meses
      case "6M":
        return 3600000*24*30*6; // 6 meses
      case "1A":
        return 3600000*24*30*12; // 1 ano
      // adicione outros casos para outros valores de tempo
      default:
        return 1000*60*5; // valor padrão: 5 minutos
    }
  };

  export const getGap = (time) => {
    switch (time) {
      case "15m":
        return 20*1000; // 30 segundos
      case "30m":
        return 30*1000; // 1 minuto
      case "1H":
        return 60*1000; // 1 minuto
      case "6H":
        return 60*1000*5; //5 minuto
      case "12H":
        return 60*1000*10; // 10 minuto
      case "1D":
        return 60*1000*10; // 10 minuto
      case "7D":
        return 60*1000*60; // 60 minutos
      case "15D":
        return 60*1000*60*6; // 6 horas
      case "1M":
        return 60*1000*60*12; // 12 horas
      case "3M":
        return 60*1000*60*24*2; // 2 dia
      case "6M":
        return 60*1000*60*24*7; // 7 dia
      case "1A":
        return 60*1000*60*24*7; // 1 dias
      // adicione outros casos para outros valores de tempo
      default:
        return 10*1000; // valor padrão: 15 minutos
    }
  }