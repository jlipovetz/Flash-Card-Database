const router = require("express").Router();
const { Users, Decks, Notecards } = require(".././models");



// Get all records
router.get("/", async (req, res) => {
  try {
    const dbData = await Notecards.findAll();

    const notecards = dbData.map((notecards) =>
      notecards.get({ plain: true })
    );
    // res.render('homepage', {
    //   galleries,
    //   loggedIn: req.session.loggedIn,
    // });
    res.status(200).json({ status: "Success", notecards });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Get one record by pk
// router.get("/:id", async (req, res) => {
//   try {
//     const payload = await Model.findByPk(req.params.id);
//     res.status(200).json({ status: "success", payload });
//   } catch (err) {
//     res.status(500).json({ status: "error", payload: err.message });
//   }
// })

// // Create a new record
// router.post("/", async (req, res) => {
//   try {
//     const payload = await Model.create(req.body);
//     res.status(200).json({ status: "success", payload });
//   } catch (err) {
//     res.status(500).json({ status: "error", payload: err.message });
//   }
// })

// // Update a new record
// router.put("/:id", async (req, res) => {
//   try {
//     const payload = await Model.update(
//       req.body,
//       {
//         where: {
//           id: req.params.id
//         }
//       }

//     );
//     res.status(200).json({ status: "success", payload });
//   } catch (err) {
//     res.status(500).json({ status: "error", payload: err.message });
//   }
// })

// // Delete a record
// router.delete("/:id", async (req, res) => {
//   try {
//     const payload = await Model.destroy({
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(200).json({ status: "success" });
//   } catch (err) {
//     res.status(500).json({ status: "error", payload: err.message });
//   }
// })


module.exports = router;