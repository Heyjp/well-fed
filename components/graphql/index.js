import { makeExecutableSchema } from 'graphql-tools';
import recipeSchema from './recipePostSchema.js';
import recipeResolver from './recipePostResolver.js';

const options = {
    typeDefs: recipeSchema,
    resolvers: recipeResolver
}

const executableSchema = makeExecutableSchema(options);

export default executableSchema;