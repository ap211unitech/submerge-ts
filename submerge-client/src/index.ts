import { BlockService, GenesisService } from "./client";

BlockService.getExtrinsicsByBlockReferenceAndIndex({
  path: { block_ref: "234", extrinsic_index: 0 },
}).then((res) => console.log(res.data));
