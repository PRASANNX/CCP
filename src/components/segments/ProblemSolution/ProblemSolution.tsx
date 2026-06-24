import type { SegmentPageData } from "../../../data/segments";
import styles from "./ProblemSolution.module.scss";

type ProblemSolutionProps = {
  segment: SegmentPageData;
};

export function ProblemSolution({ segment }: ProblemSolutionProps) {
  if (!segment.problems?.length && !segment.solutions?.length) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {segment.problems?.length > 0 && (
          <div className={styles.col}>
            <h3 className={styles.label} data-reveal>The Challenge</h3>
            <ul className={styles.list}>
              {segment.problems.map((problem, i) => (
                <li key={i} className={`${styles.item} ${styles.problemItem}`} data-reveal>
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {segment.solutions?.length > 0 && (
          <div className={styles.col}>
            <h3 className={styles.label} data-reveal>How CCP Helps</h3>
            <ul className={styles.list}>
              {segment.solutions.map((solution, i) => (
                <li key={i} className={`${styles.item} ${styles.solutionItem}`} data-reveal>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
