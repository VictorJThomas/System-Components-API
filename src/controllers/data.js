import si from "systeminformation";

/* Get system data */
export const getSystemData = async (req, res) => {
  try {
    // Getting functions from 'systeminformation' module
    const cpuData = await si.cpu();
    const osData = await si.osInfo()
    const memoryData = await si.mem()
    const processesData = await si.processes()
  
    // Getting Cpu data
    const systemCores = cpuData.cores;
    const processor = cpuData.processors
    const physicalCores = cpuData.physicalCores;
    // Getting Process data
    const processes = processesData.all
    // Getting OS data
    const busType = osData.arch
    // Getting memory data
    const totalRam = Math.round(memoryData.total / 1024 / 1024 / 1024);
    
    res.status(200).json({
      physicalCores: `Cantidad de CPU's : ${processor}. Nucleos fisicos: ${physicalCores}`,
      process: `Numero de procesos ejecutandose: ${processes}`,
      logicCores: `Cantidad de hilos o threads: ${systemCores}`,
      busType: `Tipo de Bus de datos: ${busType}`,
      RAM: `Memoria RAM total del equipo: ${totalRam}GB`
      
    });
  } catch (err) {
    console.log(err);
  }
};
