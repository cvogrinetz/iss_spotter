const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if(error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }


//   console.log('It worked! Returned IP:', ip)
// })

// fetchCoordsByIP('24.80.30.120', (error, data) => {
//   if (error) {
//     console.log('It didnt work', error);
//     return;
//   }

//   console.log('Looks like it worked:', data);
// });

  // fetchISSFlyOverTimes({ latitude: 43.6319, longitude: -79.3716 }, (error, data) => {
  //   if (error) {
  //     console.log(`It didnt work`, error);
  //     return;
  //   }
  //   console.log('Might have worked this time: ', data)
  // })

  const printPassTimes = (passTimes) => {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.riseTime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds`)
    }
  };

  nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      console.log(`It didnt work`, error);
      return;
    }
    console.log(`Space is neat: `, passTimes)
 
    printPassTimes(passTimes)
  })
