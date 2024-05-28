i  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Errors as anchor.Program<Errors>;
  
mport * as anchor from "@coral-xyz/anchor";
import type { Errors } from "../target/types/errors";
