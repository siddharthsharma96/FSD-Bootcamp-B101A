const MenuSchema = require("./../Models/menuModel");

// Create Menu
exports.createMenu = async (req, res) => {
  try {
    const menu = await MenuSchema.create(req.body);
    res.status(201).json({
      status: "success",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Get All Menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await MenuSchema.find();
    res.status(200).json({
      status: "success",
      data: menus,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// exports.addItemToSection = async (req, res) => {
//   try {
//     const updatedMenu = await MenuSchema.findByIdAndUpdate(
//       req.params.id,
//       { $push: { itemCards: req.body } }, // req.body = one item
//       { new: true, runValidators: true }
//     );

//     if (!updatedMenu) {
//       return res.status(404).json({
//         status: "fail",
//         message: "Menu section not found",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       data: updatedMenu,
//     });
//   } catch (error) {
//     res.status(500).json({ status: "fail", message: error.message });
//   }
// };

exports.addItemToSection = async (req, res) => {
  try {
    const { sectionId } = req.params;

    const updatedMenu = await MenuSchema.findOneAndUpdate(
      { "menuSections._id": sectionId }, // find menu that has this section
      { $push: { "menuSections.$.itemCards": req.body } }, // push item to that section
      { new: true, runValidators: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({
        status: "fail",
        message: "Menu section not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedMenu,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.createSection = async (req, res) => {
  try {
    const { menuId } = req.params;

    const updatedMenu = await Menu.findByIdAndUpdate(
      menuId,
      {
        $push: {
          menuSections: {
            title: req.body.title,
            itemCards: req.body.itemCards || [], // can start empty
          },
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({
        status: "fail",
        message: "Menu not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updatedMenu,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};
