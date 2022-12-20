    //yedek parçalar
    let sparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]; 

    // //yedek parça isimleri büyük harf yap
    let buyuk= (partList)=>partList.toLocaleUpperCase();
    
    //yedek parçalların isimlerinden sayıları çıkar
    let nonNumber = (partList)=>partList.replace(/[0-9]/g, '');

    //parça isimlerini tersine çevir
    let reverser = (partList) => partList.split("").reverser().join("");

    //parça isimlerinin başına KEREMAG_ ekle
    let plugKeremag = (partList) => "KEREMAG__" + partList;

    //parçalarıın sonuna parçanın sisteme giriş tarihini ekle
    let newDate = new Date();
    let addDate = (partList) => partList + newDate.getFullYear();
    
    //parçalaarı listeliyoruz 
    let consol = sparePartsList.map(buyuk)
                                .map(nonNumber)
                                .map(plugKeremag)
                                .map(addDate)

    console.log(consol);