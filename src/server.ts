import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { filterImage } from './util/util';
import phin from 'phin';

(async () => {

    // Init the Express application
    const app = express();

    // Set the network port
    const port = process.env.PORT || 8082;

    // Use the body parser middleware for post requests
    app.use(bodyParser.json());

    // filter an image from a public url
    app.get('/filteredimage', async (req: Request, res: Response) => {
        const rawImageUrl: string = req.query.image_url as string;
        if(!rawImageUrl)
            return res.status(400).send('image url is missing');

        const response = await phin({
            url: rawImageUrl,
            method: 'GET',
            parse: 'none'
        });
        if(response.statusCode != 200)
            return res.status(400).send('image retrieval failed');
        const rawImage = Buffer.from(response.body);

        const filteredImage = await filterImage(rawImage);

        return res.status(200).contentType('image/jpeg').send(filteredImage);
    });

    // Root Endpoint
    // Displays a simple message to the user
    app.get('/', async (req: Request, res: Response) => {
        return res.status(200).send('try GET /filteredimage?image_url={{}}');
    });

    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
