import styles from './Resources.module.css';
const references = [
 ['C# documentation', 'C# / .NET', 'Language reference, examples, and .NET development guidance.', 'https://learn.microsoft.com/en-us/dotnet/csharp/'],
 ['SQL Server documentation', 'SQL', 'T-SQL reference, database concepts, and query documentation.', 'https://learn.microsoft.com/en-us/sql/'],
 ['Python documentation', 'Python', 'Language and standard library references for scripts and integrations.', 'https://docs.python.org/3/'],
 ['TypeScript documentation', 'TypeScript', 'The handbook and reference for typed JavaScript applications.', 'https://www.typescriptlang.org/docs/'],
];
export default function Resources() { return <main className={styles.pageShell}><section className={styles.heroBlock}><p className={styles.eyebrow}>Development references</p><h1>Know the tools. Use the documentation.</h1><p>Official references for the languages and tools in my development toolbelt.</p></section><section className={styles.resourceGrid}>{references.map(([name,category,description,url]) => <article key={name} className={styles.resourceCard}><div><span className={styles.categoryBadge}>{category}</span><h2>{name}</h2><p>{description}</p></div><a href={url} className={styles.learnMore} target="_blank" rel="noopener noreferrer">Open official documentation ↗</a></article>)}</section></main>; }
