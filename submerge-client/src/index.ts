import { BlockService, GenesisService } from "./client";

BlockService.getBlocks().then((res) => console.log(res));
GenesisService.getGenesisRecords().then((res) => console.log(res.data));
