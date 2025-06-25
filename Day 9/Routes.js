const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

// Define Item schema and model
const itemSchema = new mongoose.Schema({
    name: 
    {
        type:String,
        required: true}
        ,
    price: {
        type:Number,
        required: true}

});
const Item = mongoose.model('Item', itemSchema);

// GET all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});

// POST a new item
router.post('/items', async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
            price: req.body.price
        });
        await newItem.save();
        res.status(201).json({ message: 'Item added', item: newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error });
    }
});

// PUT (update) an existing item
router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name, price: req.body.price },
            { new: true }
        );
        if (updatedItem) {
            res.json({ message: 'Item updated', item: updatedItem });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
});

// DELETE an item
router.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (deletedItem) {
            res.json({ message: 'Item deleted', item: deletedItem });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
});

module.exports = router;