import { json } from "@sveltejs/kit";
import { version } from "@imput/version-info";
// packages/version-info/index.js
export const version = '11.5.0';

export async function getVersion() { return '11.5.0'; }
export async function getCommit() { return 'unknown'; }
export async function getBranch() { return 'main'; }
export async function getRemote() { return 'origin'; }

export const prerender = false;
