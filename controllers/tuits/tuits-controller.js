//import posts from "./tuits.js";
import * as tuitsDao from '../tuits/tuits-dao.js'
//let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    const status = await tuitsDao
                           .updateTuit(tuitdIdToUpdate,
                                       updates);
      res.json(status);


}
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
    //tuits = tuits.filter((t) =>
      //t._id !== tuitIdToDelete);
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);


}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
