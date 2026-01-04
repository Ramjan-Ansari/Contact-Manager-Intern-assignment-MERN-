import express from 'express'
import Contact from "../models/contactModel.js";

const contactRouter = express.Router()


//post contact
contactRouter.post('/', async (req, res)=>{
    try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required"
      });
    }
    
    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: contact
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
})

//get contacts
contactRouter.get('/', async (req, res)=>{
    try {
    const contacts = await Contact.find();

    res.status(200).json({
      success: true,
      data: contacts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: error.message
    });
  }
})

// DELETE contact
contactRouter.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
});



export default contactRouter;
