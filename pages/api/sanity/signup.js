import { signUpHandler } from 'next-auth-sanity';
import { writeClient } from '../../../lib/sanity';

export default signUpHandler(writeClient);
