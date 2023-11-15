const router = require("express").Router();
const { Users, Decks, Notecards } = require("../../models");



// Get all records
router.get("/:id", async (req, res) => {
  try {
    const dbData = await Notecards.findAll({
      include: [
        {
          model: Decks,
          attributes: [
            'id',
            'name'
          ],
        },
      ],
      where: {
        deck_id: req.params.id
      }
    });

    const notecards = dbData.map((notecards) =>
      notecards.get({ plain: true })
    );

    // console.log(notecards);
    // res.render('homepage', {
    //   galleries,
    //   loggedIn: req.session.loggedIn,
    // });
    res.render('deck-edit', { notecards });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.post("/:id", async (req, res) => {
  try {
    const postInfo = req.body;
    console.log(req.params);

    const payload = await postInfo.map(item => {
      Notecards.create(
        {
          question: item.question,
          answer: item.answer,
          deck_id: req.params.id
        }
      );
    })

    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})

router.put("/:id", async (req, res) => {
  try {
    const putInfo = req.body;

    const payload = await putInfo.map(item => {
      Notecards.update(
        {
          question: item.question,
          answer: item.answer,
          deck_id: req.params.id
        },
        {
          where: {
            id: item.id,
          }
        }

      );
    })

    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})

// Delete a record
router.delete("/:id", async (req, res) => {
  try {
    // const payload = await Model.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // });
    const deleteInfo = req.body;
    const payload = await deleteInfo.map(item => {
      Notecards.destroy(
        {
          where: {
            id: item,
          }
        }

      );
    })
    // console.log(req.body);
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})


module.exports = router;