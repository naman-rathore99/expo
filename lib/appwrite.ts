import {  Avatars, Client, OAuthProvider } from "react-native-appwrite"
import {Account } from "react-native-appwrite";
import * as Linking from 'expo-linking';
import { openAuthSessionAsync, openBrowserAsync } from "expo-web-browser";
export const config = {
    plateform: 'com.naman.realEstate'
    , endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.plateform!);


export const avater = new Avatars(client);
export const account = new Account(client)

export async function login() {
 try {
     const redirectUri = Linking.createURL('/')
     
     const response = await account.createOAuth2Token(OAuthProvider Google ,redirectUri
     )

     if (!response) throw new Error('Faild to login')
     const browserResult = await openAuthSessionAsync(
         response.toString(),
          redirectUri)
          if (browserResult.type !== 'success') throw new Error('Faild to login by web')
     const url = new URL(browserResult.url);
     
     const secret= url.searchParams.get('secret')?.toString()
     const userId = url.searchParams.get('userId')?.toString()
     
     if (!secret || !userId) throw new Error('Faild to login user | secret')
     
     
     const session = await account.createSession(userId, secret)
     
     if (!session) throw new Error('Faild to login user | session')
     
     
     return true
 } catch (error) {
     console.error(error)
return false     
 }
}