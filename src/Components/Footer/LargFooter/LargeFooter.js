const LargeFooter = ({ styles, data }) => {
  return (
    <div className={styles.largeFooter}>
      {data.map((item) => (
        <div className={styles.group}>
          <div className={styles.head}> {item.title} </div>
          <div className={styles.body}>
            {item.links.map((link) => (
              <a href="/" className={styles.links}>
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LargeFooter;
