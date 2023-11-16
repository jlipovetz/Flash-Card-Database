const router = require("express").Router();
const { Users, Decks, Notecards } = require("../../models");

router.put("/:id", async (req, res) => {
  try {
    const putInfo = req.body;

    console.log(putInfo);

    const payload = await Decks.update(
      {
        name: putInfo.name
      },
      {
        where: {
          id: req.params.id,
        }
      }

    );


    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})

module.exports = router;