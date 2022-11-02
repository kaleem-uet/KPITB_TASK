function calulateDateDiffrence(){
    let Birth = 1981-11-04;
    let Today=2013-09-04;
    let birthDate = new Date(Birth + 'T12:00:00Z');
    let todayDate=new Date(Today + 'T12:00:00Z')
   let years = birthDate.getFullYear() - todayDate.getFullYear();
    let month = birthDate.getMonth() - todayDate.getMonth();

    console.log(years*-1+'+' + month+"+" );
   
}

calulateDateDiffrence();