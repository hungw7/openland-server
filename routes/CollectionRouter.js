const collectionController = require("../controllers/CollectionController");
const auth = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

// router
//   .route("/:id")
//   .delete(walletController.removeWallet)
//   .put(walletController.updateWallet)
//   .get(walletController.getAWallet);
router.route("/all").get(collectionController.getAllCollections);
router.route("/token/:token").get(collectionController.getCollectionsByToken);
router.route("/").post(auth, collectionController.insertCollection);
router.route("/owner/:owner").get(collectionController.getCollectionsByOwner);
// .post(itemController.addWallet)
// .put(itemController);

module.exports = router;
