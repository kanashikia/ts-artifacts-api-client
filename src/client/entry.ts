import { ArtifactsApi } from '@trey.turner/artifacts-api-client';

const client = new ArtifactsApi({
  apiToken: process.env.ARTIFACTS_API_TOKEN,
});

// await client.move.toA("monster", "yellow_slime");

const character = await client.info.characters.get({
  name: process.env.ARTIFACTS_CHARACTER_NAME,
});

// if (character.level )

await client.fight.continuously();