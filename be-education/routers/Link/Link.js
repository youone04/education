import express from "express";
import { addLinkKursus } from "../../controller/Link/Link.js";
const routerLink = express.Router();

routerLink.post('/link', addLinkKursus);
export default routerLink;