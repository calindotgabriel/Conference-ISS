import express from 'express';

import Paper from '../models/Paper';
import config from './config';


const router = express.Router();
router.post('/grade', (req, res) => {
    const { grade } = req.body;
    const { username } = req.body;
    Paper.update({firstGrader: username},
        {firstGrade : grade}).exec().then(p => {
            res.json({status: "Updated first grade!"})
    });

    Paper.update({secondGrader: username},
        {secondGrade : grade}).exec().then(p => {
            res.json({status: "Updated first grade!"})
    });
});
router.post('/:username', (req, res) => {
    const username = req.params.username;
    if (!username) { res.json({error: 'No username provided'})};

    const filteredPapers = [];
    Paper.find( { $or : [{firstGrader: username}, {secondGrader: username}] })
    .exec().then(papers => {
        papers.forEach(p => {
            // console.log('p: ' + p)
            const { all } = req.body;
            
            const firstGrade = p.get('firstGrade');
            const secondGrade = p.get('secondGrade');
            const diff = Math.abs(firstGrade - secondGrade);
            if (diff > 1 || all) {
                const resp = {
                    id: p.get('_id'),
                    firstGrader: p.get('firstGrader'),
                    secondGrader: p.get('secondGrader'),
                    firstGrade: firstGrade,
                    secondGrade: secondGrade,
                    diff : diff
                }
                filteredPapers.push(resp);
            }
        });
        res.json(filteredPapers)
    });

    
});
export default router;
