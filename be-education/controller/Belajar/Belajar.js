import dbs from "../../models/index.js";

export const getBelajar = async (req, res) => {
  try {
    const belajar = await dbs.pembelian.findOne({
      where: {
        userId: req.params.id,
        id: req.body.id,
      },
      include: [
        {
          model: dbs.kursus,
          as: "kursus",
          include: [
            {
              model: dbs.link,
              as: "link",
            },
          ],
        },
      ],
    });

    if (belajar.status) {
      const dataHasil = belajar.kursus.link.filter(li => li.batch_pembelian === belajar.batch_pembelian);
    //  const d = belajar['kursus']['dataValues']['link']
      const dataSend = {
        ...belajar.dataValues,
        kursus : {...belajar.kursus.dataValues, link: dataHasil}        
      }
      res.status(200).json(dataSend);
    } else {
      belajar['kursus']['dataValues']['link'] = [];
      res.status(200).json(belajar);
    }
  } catch (error) {
    res
      .status(500)
      .json(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
  }
};


// let store = {
//     results: '1',
//     dcn: '2',
//     search: '3',
//     obj: {
//       val1: 1,
//       val2: 2
//     }
//   };
  
//   //console.log({...store, dcn: 5});
//   //console.log({...store, obj: {val3: 3, val4: 4}});
  
//   //Not correct
//   console.log({...store, obj: {val2: 22, val3: 3}});
  
//   console.log({...store, obj: {...store.obj, val2: 22, val3: 3}});